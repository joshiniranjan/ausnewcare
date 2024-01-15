import { useState } from "react"
import { useAuth } from "../store/auth"
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";


const MockTest = () => {
    const {questions,user} = useAuth();
    
    const [quest, setQuest] = useState({
        questionno: "",
        answer:""
    })

    if (!questions || questions.length === 0) {
        // return <HashLoader color="#36d7b7" />; // or any other loading indicator
        return 'loading...'
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/data/mocktest",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(quest)
            })
            const res_data = await response.json();
            console.log(res_data);
            
            if(response.ok) {
                toast.success('Answers submitted Successful email will be sent regarding results')
                // emailjs.sendForm('service_b3h68f4', 'template_ccrgph7', form.current, '0bEwJCNRL8IP494PA')
                // .then((result) => {
                //     console.log(result);
                // }, (error) => {
                //     console.log(error);
                // });
                // navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        } catch(error) {
            console.log('error from mock page')
        }
    }


    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name,value);
        
        setQuest({
            ...quest,
            [name]: value
        })  
             
    }
    return (
        <div className="quizWrap flex flex-wrap place-items-center place-content-center  py-20">
            <form  action="" className="overflow-hidden relative"  onSubmit={submitHandler}>
                <h1 className="text-3xl font-bold mb-2 text-center">Skill Test</h1>
                <span className="block mb-2">Hi, <em>{user.username}</em></span>
                <ul>
                    {
                        questions.map((question, index) => {
                            return (
                                <li key={index} className="mb-5">
                                    <label className="block mb-2" htmlFor={`q${index+1}`}>{questions[index].question}</label>
                                    <textarea 
                                        id={`q${index+1}`} 
                                        name={`q${index+1}`} 
                                        onChange={handleInput} 
                                        className="w-full resize-none h-40 focus:outline-none"
                                    >
                                    </textarea>
                                </li>
                            )
                        })
                    }    
                </ul>
                <button className="but12" type="submit">
                    <svg><rect></rect></svg>
                    {/* {currentQuestion === quizes.length - 1 ? 'Submit' : 'Next'} */}
                    Next
                </button>
            </form>
            <div className={`result bg-white p-6 rounded `}>
                <h3 className="text-3xl font-bold mb-2 text-center text-green-800">Result</h3>
                <strong className="block mb-2">Out of <span>you answered questions correct.</span></strong>
                <div className="chartWrap relative">
                    <strong className="percentage">%</strong>
                </div>
                <button className="but12">
                    <svg><rect></rect></svg>
                    done
                </button>
            </div>
        </div>
    )
}

export default MockTest