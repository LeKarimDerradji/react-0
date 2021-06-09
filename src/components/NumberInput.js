function NumberInput({step, id, type, value,  handleStepChange, isDisabled}) {
    return (
        <>
        <label htmlFor={step}>step:</label>
        <input id={id} type={type} value={value} onChange={handleStepChange} disabled={isDisabled} />
        </>
    )
    
}

export default NumberInput;