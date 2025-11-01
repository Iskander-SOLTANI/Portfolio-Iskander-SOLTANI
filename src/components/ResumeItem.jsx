const ResumeItem = ({icon,year,title,desc}) => {
    return(
        <div className="resume-item">
            <div className="resume-icon">{icon}</div>
            <span className="resume-date">{year}</span>
            <h3 className="resume-subtitle">{title}</h3>
            <p className="resume-descrption">{desc}</p>
        </div>
    );
}

export default ResumeItem;