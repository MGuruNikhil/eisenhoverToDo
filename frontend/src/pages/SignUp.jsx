import CircularSpinner from "@/components/CircularSpinner"
import NavBar from "@/components/navBar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { apiUrl } from "@/config"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function SignUp() {

    const token = localStorage.getItem("token");

    const navigate = useNavigate()

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(token) {
            axios.get(apiUrl + 'auth/user', {
                headers: {
                    Authorization: token,
                }
            }).then(res => {
                if(res.status == 200) {
                    console.log(res.data.user);
                    navigate('/home');
                }
            }).catch(error => {
                console.log(error.message);
            })
        }
    },[])

    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        if (password == confirmPassword) {
            axios.post(apiUrl + "auth/register", {
                username: email,
                password,
                displayName
            }).then((res) => {
                console.log(res.data);
                localStorage.clear();
                setIsLoading(false);
                alert("User Created Successfully, Log In to continue.");
                navigate("/login");
            }).catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
        } else {
            setIsLoading(false);
            alert("Password field and confirm password field must be equal.");
            setPassword("");
            setConfirmPassword("");
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div className="flex-1 flex items-center justify-center">
                <Card className="w-[350px] relative overflow-hidden">
                    <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>Enter your credentials and SignUp to create an account.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="displayName">Name</Label>
                                <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} type="text" id="displayName" placeholder="Your name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Your email adderss" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" placeholder="Confirm Password" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button onClick={() => navigate('/login') } variant="outline">Log In</Button>
                        <Button type='submit'>Sign Up</Button>
                    </CardFooter>
                    </form>
                    {isLoading && <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center  bg-inherit backdrop-blur-sm z-10"><CircularSpinner Width="30px" StrokeWidth="3"/></div>}
                </Card>
            </div>
        </div>
    )
}
