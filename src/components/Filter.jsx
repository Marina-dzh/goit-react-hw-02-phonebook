export const Filter = ({changeFilter,filter}) => {
    return (
       <>
            <div>Find contacts by name</div>
            <input type="text" onChange={ changeFilter} value={filter} />
            
        </>     
    )
}