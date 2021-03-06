import * as yup from "yup";

const Validator = async (values: any, schema: any): Promise<{ err: boolean, data: any }> => {
    try {
        const data = await schema.validateSync(values, { abortEarly: false })
        return {
            err: false,
            data: data
        }
    } catch (err) {
        let object = {}
        err.errors.map((value: any) => {
            object = {
                ...object,
                [value.path]: {
                    msg: value.msg,
                    error: true
                }
            }
        });
        return { 
            err: true, 
            data: object 
        };
    }
}

export default Validator;