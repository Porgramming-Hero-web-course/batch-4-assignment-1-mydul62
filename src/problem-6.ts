interface IMyProfile {
  name: string;
  age: number;
  email: string;
}

const myProfile: IMyProfile = { 
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

function updateProfile(myProfile: IMyProfile, updateInfo: Partial<IMyProfile>) {
  const updatedProfile = {
    ...myProfile,
    ...updateInfo,
  };
  return updatedProfile;
}

updateProfile(myProfile, { age: 28,name: "mahim"});
