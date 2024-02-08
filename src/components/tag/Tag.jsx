const Tag = () => {
  const tagList = [
    "Golang",
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
    "Python",
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
