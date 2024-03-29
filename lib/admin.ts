import { auth } from "@clerk/nextjs";

const adminIds = ["user_2eGrPDFGrm6i5YaYp8RqiFvWd6l"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
