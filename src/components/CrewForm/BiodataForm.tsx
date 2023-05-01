import { FC } from 'react'
import InputDate from '../fields/InputDate'
import InputFile from '../fields/InputFile'
import InputSelect from '../fields/InputSelect'
import InputText from '../fields/InputText'
import { Button } from '../ui/Button'
import LargeHeading from '../ui/LargeHeading'

interface IProps {
  setActiveSection?: (sec: string) => void
}

const BiodataForm: FC<IProps> = ({ setActiveSection }) => {
  return (
    <>
      <LargeHeading size="sm">Biodata</LargeHeading>
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-4 md:gap-10">
          <div className="grid gap-4 md:col-span-3 md:grid-cols-2">
            <div className="md:col-span-2">
              <InputText name="idNumber" label="ID Number" />
            </div>
            <InputText name="givenName" label="Given Name" />
            <InputText name="surName" label="Sur Name" />
            <InputText name="pob" label="POB" />
            <InputDate name="dob" label="DOB" />
          </div>
          <InputFile
            name="crewImage"
            label="Image"
            className="relative mx-auto grid h-48 w-36 place-items-center border border-dashed border-black/75"
          />
        </div>
        <InputText name="phoneNumber" label="Phone Number" />
        <InputText name="homeAddress" label="Home Address" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-4 md:grid-cols-2">
            <InputSelect
              name="maritalStatus"
              label="Marital Status"
              options={[
                { name: 'Single', value: 'single' },
                { name: 'Married', value: 'married' },
                { name: 'Divorced', value: 'divorced' },
              ]}
            />
            <InputSelect
              name="religion"
              label="Religion"
              options={[
                { name: 'islam', value: 'islam' },
                { name: 'kristen', value: 'kristen' },
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <InputText name="height" label="Height" />
            <InputText name="weight" label="Weight" />
            <InputSelect
              name="coverall"
              label="Coverall"
              options={[
                { name: 'S', value: 's' },
                { name: 'M', value: 'm' },
                { name: 'L', value: 'l' },
                { name: 'XL', value: 'xl' },
                { name: 'XXL', value: 'xxl' },
              ]}
            />
            <InputText name="shoeSize" label="Shoe Size" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <InputText name="nextOfKin" label="Next of Kin" />
          <InputSelect
            name="relation"
            label="Relation"
            options={[
              { name: 'Couple', value: 'couple' },
              { name: 'Children', value: 'children' },
              { name: 'Parent', value: 'parent' },
              { name: 'Sibling', value: 'sibling' },
              { name: 'Other', value: 'other' },
            ]}
          />
          <InputText name="emergencyNumber" label="Emergency Number" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InputText name="mothersName" label="Mother's Name" />
          <InputText name="fathersName" label="Father's Name" />
        </div>
      </div>
      {setActiveSection && (
        <div className="text-end">
          <Button type="button" onClick={() => setActiveSection('sec2')}>
            Next
          </Button>
        </div>
      )}
    </>
  )
}

export default BiodataForm
