import "./style.css"

const ContainerHeader = ({ title}) => (
        <h1 className="container__header">{title}</h1>
);
const ContainerSubHeader = ({ title}) => (
    <h2 className="container__subHeader">{title}</h2>
);


export default {ContainerHeader, ContainerSubHeader};
