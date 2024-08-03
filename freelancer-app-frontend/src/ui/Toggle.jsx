import { Field, Label, Switch } from '@headlessui/react'

function Toggle({ label, enabled, onChange }) {
    return (
        <Field>
            <div className="flex items-center gap-x-2">
                <Label>{label}</Label>
                <Switch
                    checked={enabled}
                    onChange={onChange}
                    className={`${enabled ? "bg-primary-900" : "bg-secondary-200"
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                    <span className={`${enabled ? "-translate-x-6" : "-translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`} />
                </Switch>
            </div>
        </Field>

    )
}

export default Toggle;