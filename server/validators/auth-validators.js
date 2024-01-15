const z = require("zod");

const loginSchema= z.object({
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .min(3, {message: "Email must be at least 3 characters"})
    .max(255, {message: "Email must not be more than 255 characters"}),
    password: z
    .string({required_error: "Email is required"})
    .trim()
    .min(6, {message: "Password must be at least 6 characters"})
    .max(1024, {message: "Password can't be greater than 1024 characters"}),
})

//creating an object schema
const signupSchema = loginSchema.extend({
    firstname: z
    .string({required_error: "firstname is required"})
    .trim()
    .min(3,{message: "firstname must be at least 3 characters"})
    .max(255,{message: "firstname must not be more than 255 characters"}),
    lastname: z
    .string({required_error: "lastname is required"})
    .trim()
    .min(3,{message: "lastname must be at least 3 characters"})
    .max(255,{message: "lastname must not be more than 255 characters"}),
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "username must be at least 3 characters"})
    .max(255,{message: "username must not be more than 255 characters"}),
   
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone must be at least 10 characters"})
    .max(20, {message: "Phone must not be more than 20 characters"}),
})

const quizSchema = z.object({
    answer: z
    .string({required_error: "Select any one of the answer"})
    .trim(),
})


//creating an object schema
const enrollmentSchema = z.object({
    fullname: z
    .string({required_error: "Fullname is required"})
    .trim()
    .min(3,{message: "fullname must be at least 3 characters"})
    .max(255,{message: "fullname must not be more than 255 characters"}),
    dateofbirth: z
    .string({required_error: "date of birth is required"})
    .trim(),
    address: z
    .string({required_error: "address is required"})
    .trim()
    .min(3,{message: "address must be at least 3 characters"})
    .max(255,{message: "address must not be more than 255 characters"}),
    email: z
    .string({required_error: "email is required"})
    .trim()
    .min(3,{message: "email must be at least 3 characters"})
    .max(255,{message: "email must not be more than 255 characters"}),
    mobile: z
    .string({required_error: "mobile is required"})
    .trim()
    .min(3,{message: "mobile must be at least 3 characters"})
    .max(255,{message: "mobile must not be more than 255 characters"}),
    qualification: z
    .string({required_error: "qualification is required"})
    .trim()
    .min(3,{message: "qualification must be at least 3 characters"})
    .max(255,{message: "qualification must not be more than 255 characters"}),
    skills: z
    .string({required_error: "skills is required"}).array(),
    sports: z
    .string({required_error: "sports is required"}).array(),
    interest: z
    .string({required_error: "interest is required"})
    .trim()
    .min(3,{message: "interest must be at least 3 characters"})
    .max(255,{message: "interest must not be more than 255 characters"}),
    plan: z
    .string({required_error: "plan is required"})
    .trim()
    .min(3,{message: "plan must be at least 3 characters"})
    .max(255,{message: "plan must not be more than 255 characters"}),
    coursecombination: z
    .string({required_error: "coursecombination is required"}).array(),
    resources: z
    .string({required_error: "coursecombination is required"}).array(),
    achievement: z
    .string({required_error: "achievement is required"})
    .trim()
    .min(3,{message: "achievement must be at least 3 characters"})
    .max(255,{message: "achievement must not be more than 255 characters"}),
    level: z
    .string({required_error: "level is required"})
    .trim()
    .min(3,{message: "select at least one"}),
    info: z
    .string({required_error: "info is required"}).array(),
    availability: z
    .string({required_error: "availability is required"}).array(),
    availabilitytime: z
    .string({required_error: "availability time is required"}).array(),
    declaration: z
    .string({required_error: "Need to make the declaration"})
    .trim(),
    usinumber: z
    .string({required_error: "USI number is required"})
    .trim()
    .min(3,{message: "USI number must be at least 3 characters"})
    .max(255,{message: "USI number must not be more than 255 characters"}),
    lastcourse: z
    .string({required_error: "Last Course is required"})
    .trim(),
    usinumber: z
    .string({required_error: "USI number is required"})
    .trim()
    .min(3,{message: "USI number must be at least 3 characters"})
    .max(255,{message: "USI number must not be more than 255 characters"}),
    expectation: z
    .string({required_error: "expectation from training is required"})
    .trim()
    .min(3,{message: "expectation from training must be at least 3 characters"})
    .max(255,{message: "expectation from training must not be more than 255 characters"}),
    coreunit: z
    .string({required_error: "core unit is required"}).array(),
    electiveunit: z
    .string({required_error: "elective unit is required"}).array()
})

module.exports = {signupSchema, loginSchema, enrollmentSchema,quizSchema};