import React from "react";

function Team() {
  const member = {
    name: "John Doe",
    role: "Co-Founder & CEO",
    description:
      "John is the visionary behind the company, leading the team with over 10 years of experience in the industry. He believes in pushing the boundaries of technology to create innovative solutions for the future of music.",
    imageUrl:
      "https://i.pinimg.com/originals/be/39/17/be39172619b86611f07c2c686c652d55.jpg", 
  };

  return (
    <div className="w-full text-center">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between py-10 md:px-20 px-6">
        <div className="w-[300px] h-[300px] flex-shrink-0 mb-6 md:mb-0 mx-auto md:mx-0 md:mr-12">
          <img
            src={member.imageUrl}
            alt="Team Member"
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-[#f5c843]">
            {member.name}
          </h2>
          <p className="text-2xl text-gray-300 mt-2 font-semibold">
            {member.role}
          </p>
          <p className="text-lg text-gray-400 mt-4">{member.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
