import { createContext, useContext, useEffect, useState } from "react";  

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user,setUser]= useState("");
    const [courses, setCourses] = useState([])
    const [quizes, setQuizes] = useState([])
    const [questions, setQuestions] = useState([])

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    }

    let isLoggedIn = !!token;
    
    //tackling the logout functionality
    const LogoutUser = () => {
       setToken("")
        localStorage.removeItem("token")
    }

    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }

        getQuizes()
        getCourses()
        userAuthentication()
        getQuestions()
        
    }, [])


    // JWTAuthentication--to get the currently logged in user data
    const userAuthentication = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            if(response.ok) {
                const data = await response.json();
                setUser(data.userData)
            } else {
                console.error("Error fetching user data");
            }
        } catch(error) {
            console.log('error fetching data')
        }
    }
    //For fetching courses
    const getCourses = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data/course', {
                method:'GET'
            })
            if(response.ok) {
                const allcourses = await response.json()
                setCourses(allcourses.data)
            }
        } catch(error) {
            console.log(`error in courses front end ${error}`)
        }
    }


     //For fetching quizes
     const getQuizes = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data/quiz', {
                method:'GET'
            })
            if(response.ok) {
                const allQuizes = await response.json()
                setQuizes(allQuizes.data)
            }
        } catch(error) {
            console.log(`error in courses front end ${error}`)
        }
    }

    
     //For fetching questions
     const getQuestions = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/data/mocktest', {
                method:'GET'
            })
            if(response.ok) {
                const allQuestions = await response.json()
                setQuestions(allQuestions.data)
            }
        } catch(error) {
            console.log(`error in courses front end ${error}`)
        }
    }
    
    return (
        <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser, user, courses, quizes, questions}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue =  useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}