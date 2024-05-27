
Local Storage : is a one kind of data base which is avalible in browser

we can store data in key and value formate
    if we want to store data in localstorage we can use below method

    localstorage.setItem('key',value)

if we want to reterive data from localstorage we can use below method
    
    localstorage.getItem('key')


----------------------------
Hook
hook is a special function with the help of hook funciton we can mange many state of function component and mange lifecycle of funtion component.

there are many popular hooks avaliable for example, useState(),useEffect(),useContext() ...
and many more  

useEffect : useEffect is a most popular hook function.
    using of useEffect we can control side effect of function component.

    for Example : api fetching , render specific code when specific event occur.

    syntax:

    useEffect(callback,dependencies)

    we dont' pass any dependencies it will run useEffect every time.

    no depemdency use Effect
    (1) useEffect(callback): it will invoke every time

        or

        useEffect(callback,[]): no dependency - call every time

    (2) use Effect (callback ,[count]): it depend on count

    (3)use effect with blank dependencies : it will run only one time 



sessionstorage vs localstorage
    ---------------------------
    sessiong storage : session storage keep value in browser or tab memory 
    whenever we close tab or browser it will destroy session memory
        this is a temporary storage specifier.
        capacity of this storage specifier 5-10mb - depend on browser
        sessionStorage.setItem('Key',value);

localstorage : it keep the data for long time

it does not destroy data on browser clone or tab close.
    capacity of this localstorage is 5-10MB - depend on browser

   localstorage mainly use for theme setting etc.

    we can manually delete record from localstorage.

    both data can access by specific port or application