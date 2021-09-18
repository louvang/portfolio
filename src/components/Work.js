function Work(props) {
  return (
    <div className="work">
      <div className="mobile title">
        <a href={props.demoUrl} target="_blank" rel="noreferrer">
          <h1>{props.title}</h1>
        </a>
        <h2>{props.date}</h2>
      </div>

      <div className="links">
        <a href={props.demoUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        &nbsp; // &nbsp;
        <a href={props.githubUrl} target="_blank" rel="noreferrer">
          Github
        </a>
      </div>

      <div className="previewImg">
        <a href={props.demoUrl} target="_blank" rel="noreferrer">
          <img src={props.imgName} alt={props.title} />
        </a>
      </div>

      <div className="descAndTitle">
        <div className="desktop title">
          <a href={props.demoUrl} target="_blank" rel="noreferrer">
            <h1>{props.title}</h1>
          </a>
          <h2>{props.date}</h2>
        </div>
        <div className="descContainer">
          <div className="specs">
            <strong>Langs/Frameworks:</strong> {props.specs}
          </div>
          <div className="about">
            <strong>About: </strong> {props.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
