import ProfileImage from "../assets/MyFiles/profile.png";

const ProfilePicture = () => {
  return (
    <div className="flex justify-center mb-6">
      <img
        src={ProfileImage}
        alt="Sandeep Poloju"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-600"
      />
    </div>
  );
};

export default ProfilePicture;
