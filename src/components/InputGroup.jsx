const InputGroup = ({placeholder, btnText, iRef, onClick}) => {
    return <div className="input-group">
        <input ref={iRef} className="input" type="text" name="" placeholder={placeholder} />
        <button className="btn" onClick={onClick}>{btnText}</button>
    </div>;
}
 
export default InputGroup;
