import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";

const loginUser = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByCustomId(payload.id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not available");
  }

  // Checking if the user is deleted
  const isDeleted = user.isDeleted;
  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user has been deleted");
  }

  // Checking if the user is deleted
  const userStatus = user?.status;
  if (userStatus === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "This user has been blocked");
  }

  // Checking if the password
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid password");
  }
  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "10d",
  });

  return {
    accessToken,
    needsPasswordChange: user.needsPasswordChange,
  };
};

const changePassword = async (
  user: { userId: string; role: string },
  payload,
) => {
  const result = await User.findOneAndUpdate({
    id: user.userId,
    role: user.role,
  });
};
export const AuthService = {
  loginUser,
  changePassword,
};
