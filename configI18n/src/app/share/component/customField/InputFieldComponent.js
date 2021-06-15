import PropTypes from 'prop-types';
import {
    TextField, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    maxLength: PropTypes.string,
    size: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    borderRadius: PropTypes.string,
    InputProps: PropTypes.bool,
    image: PropTypes.string,
    onClickIcon: PropTypes.func,
    heightInput: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    maxLength: '',
    size: 'small',
    placeholder: '',
    disabled: false,
    borderRadius: '',
    InputProps: false,
    image: '',
    onClickIcon: null,
    heightInput: 40
}

function InputField(props) {
    const {
        field, form,
        type, label, placeholder, disabled, heightInput,
        size, maxLength, borderRadius, InputProps
    } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const handleChange = (e) => {
        if (e.target.value.length <= maxLength) {
            field.onChange(e);
        }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            '& input': {
                fontSize: 'unset'
            }
        },
        borderRadius6x: {
            borderRadius: 6
        },
        colorFFF: {
            color: "#FFFFFF"
        },
        paddingBt0_5re: {
            paddingBottom: "0.5rem"
        },
        pdInput: {
            '& input': {
                height: heightInput,
                padding: '0px 15px'
            }
        },
        pdrInput: {
            '& input': {
                height: heightInput,
                padding: '0px 15px 0px 0px'
            }
        },
        customInput: {
            '& div': {
                fontSize: 'unset'
            }
        },
        fontSizeUnset: {
            fontSize: 'unset'
        }
    }));
    const classes = useStyles();

    return (
        <>
            <div className="dialog-input">
                {label && <Typography>{label}</Typography>}
                <TextField
                    className={`customError ${classes.borderRadius6x} ${classes.customInput} ${InputProps ? classes.pdrInput : classes.pdInput} ${classes.root}`}
                    variant="outlined"
                    fullWidth={true}
                    id={name}
                    {...field}
                    type={type}
                    onChange={handleChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    autoComplete="off"
                    size={size}
                    style={{ borderRadius: borderRadius }}
                    inputProps={{ maxLength: maxLength }}
                />
                <div className="custom-error">
                    <span>
                        {showError ? errors[name] : errors[name]}
                    </span>
                </div>
            </div>
        </>
    );
}

export default InputField;
