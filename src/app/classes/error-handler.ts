import { constants } from '../constants/constants';

export abstract class ErrorHandler {

    constructor() {
        this.default = constants.errorMessages.default;
        this._defaultForm = constants.errorMessages.form.default;
        this._emailForm = constants.errorMessages.form.email;
        this._nameForm = constants.errorMessages.form.name;
        this._passwordForm = constants.errorMessages.form.password;
    }

    private readonly default: string;
    private readonly _defaultForm: string;
    private readonly _emailForm: string;
    private readonly _nameForm: string;
    private readonly _passwordForm: string;

    protected getErrorMessage(key: string) {
        switch (key) {
            // case '':
            //     return '';
            default:
                return this.default;
        }
    }

    protected getFormFieldErrorMessage(key: string) {
        switch (key) {
            case 'email':
                return this._emailForm;
            case 'name':
                return this._nameForm;
            case 'password':
                return this._passwordForm;
            default:
                return this._defaultForm;
            break;
        }
    }
}
