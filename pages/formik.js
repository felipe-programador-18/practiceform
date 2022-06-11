import { Formik, Form, Field } from "formik"

// remember with formik i need always said what i wanna caught!!!
//initiail value and onsubmit to get that go get!!!

const FormikPractice = () => {


    return(<> <h1>Practice about little bit about Formik</h1>

    <Formik
    initialValues={{
        name:'',
       email:''
    }}
    onSubmit={ async(values) => {
        console.log(values)
    } }
    >
      {
        ({values}) => (
            <Form>
            <label> Name:    
            <Field type='text' name='name' />
            </label>
            <label> Email:
            <Field type='email' name='email' />
            </label>

            <pre>  {JSON.stringify(values, null,2)} </pre>
            </Form>
        )
        }

    </Formik>
   
   
   </>)
}

export default FormikPractice