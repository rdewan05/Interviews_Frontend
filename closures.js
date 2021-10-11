const comp = (props) => {
    useEffect(() => {
        console.log("Calling Api...");
        props.showFunc(!props.show);

    }, []);
    return (
        <div>{input}</div>
    );

}
export default comp;


const comp2 = () => {

    useEffect(() => {
        console.log("Calling Api...");
    }, []);
    return (
        <div><comp /></div>
    );

}
export default comp2;

const loader = () => {
    return (
        <div>Loading...</div>
    );

}
export default loader;

const app = () => {
    const [showLoader, setShowLoader] = useState(true);
    const showLoaderHandler = (value) => {
        setShowLoader(value);
    }
    return (
        <div>
            {showLoader && <loader />}
            <comp showFunc={showLoaderHandler} showValue={showLoader} />
            <comp2 show={showLoaderHandler} />
        </div>
    );

}
export default app;
