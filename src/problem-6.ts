interface Profile {
  name: string;
  age: number;
  email: string;
}

const profile: Profile = { 
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

function updateProfile(myProfile: Profile, updateInfo: Partial<Profile>) {
  const updatedProfile = {
    ...myProfile,
    ...updateInfo,
  };
  return updatedProfile;
}

console.log(updateProfile(profile, { age: 26 }));
