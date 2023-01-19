import { DeepPartial } from "react-hook-form";
import { httpBffClient } from "services/interceptor";

export async function getInfo(): Promise<BffResponse> {
  return await httpBffClient.get(
    `/userInfo/${process.env.REACT_APP_BFF_USERID}`
  );
}

export async function login(data: { username: string; password: string }) {
  await httpBffClient.post(`/auth/login`, data);
}
export async function updateGit() {
  await httpBffClient.get(`/gitInfo/${process.env.REACT_APP_BFF_USERID}`);
}
export async function updateUserInfo(data: {
  profile: Profile;
}): Promise<Profile> {
  const res: BffResponseProfile = await httpBffClient.patch(
    `/userInfo/${process.env.REACT_APP_BFF_USERID}`,
    data
  );
  return res?.profile;
}
export async function updateResumeInfo(data: DeepPartial<Resume>) {
  await httpBffClient.patch(
    `/resume/${process.env.REACT_APP_BFF_USERID}`,
    data
  );
}
export async function putResume(data: Partial<Resume>): Promise<Resumes> {
  const res: BffResponseResumes = await httpBffClient.put(
    `/resume/${process.env.REACT_APP_BFF_USERID}`,
    data
  );

  return res?.resumes;
}
