const Tag = () => {
  const tagList = [
    "Python",
    "Node JS",
    "Typescript",
    "React",
    "AWS",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Next Js",
    "React Native",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
