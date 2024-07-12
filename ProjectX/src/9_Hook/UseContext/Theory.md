
use state is mutable and props it immutable

problem : when we want to pass the data to another component in between their are many component. these components does not need these types of data. 

solution: we use usecontext to pass the data to another component

use context :
basically used to pass the data from origin to destination .
it add data gloabally.

it contain 2 properties :
    createContext():using of create Context we can create context globally 
    useContext(ContextName): we can use specific context any component
    context.provider : which allow specific component to specific context
