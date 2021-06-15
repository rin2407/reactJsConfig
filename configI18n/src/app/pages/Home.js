import { Grid } from '@material-ui/core';
import { Formik, Form, FastField } from 'formik';
import * as yup from 'yup';
import InputField from '../share/component/customField/InputFieldComponent';
function Home() {
    const validationSchema = yup.object({
        email: yup
            .string()
            .required('required')
            .max(255,'max')
            .matches(
                /^([\ s]*)+([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@([a-zA-Z_]+?\.)+([a-zA-Z]{2,4})+[\ s]*$/,
                'format')
    });
    const initialValues = {
        email: ""
    }
    const handleOnSubmit = () =>{
        console.log('aaaa')
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleOnSubmit}
            >
                {formikProps => {
                    return (
                        <Form>
                            <Grid container>
                                <Grid item xs={8} sm={8}>
                                    <FastField
                                        name="email"
                                        component={InputField}
                                        placeholder="test@gmail.com"
                                        size="small"
                                        maxLength={'255'}
                                        borderRadius="4"
                                        heightInput={"40px"}
                                    />
                                </Grid>
                                <Grid item xs={4} sm={4} className="button-disable">
                                    <button
                                        disabled={formikProps?.values.email.length > 0 && !formikProps?.errors?.email ? false : true}
                                        type="submit"
                                        className={'classes.customButton'}>
                                        add
                                    </button>
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default Home;