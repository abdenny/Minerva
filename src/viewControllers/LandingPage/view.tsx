import type { UseFormReturn } from 'react-hook-form';
import type { SignUp } from 'types';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import CustomErrorMessage from 'components/CustomErrorMessage';

interface Props {
  signUpForm: UseFormReturn<SignUp>;
  submit: (e: React.FormEvent) => void;
}

const View = ({ signUpForm, submit }: Props) => {
  return (
    <div className="h-screen w-screen">
      <main className=" w-full xl:h-7/8 flex flex-wrap">
        <Navbar />
        <section className="h-7/8  xl:w-1/2 flex flex-col justify-center bg-white">
          <div className="py-6 px-8 md:py-8 md:px-10 xl:py-12 xl:px-16 flex flex-col justify-center">
            <div className="flex flex-col md:flex-row xl:flex-col font-header text-4xl xl:text-5xl gap-2">
              <p className="text-primary-black">Something</p>
              <p className="text-primary-blue"> for Everyone</p>
            </div>
            <div className="text-body leading-8 py-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis enim ac lorem
                hendrerit convallis et vel risus. Donec scelerisque a lectus non rhoncus. Aenean id
                maximus metus, quis tincidunt nunc. In auctor auctor massa, non sollicitudin diam
                auctor id. Proin sed justo rhoncus, vulputate mauris ut, volutpat libero. Phasellus
                euismod convallis turpis id sollicitudin. Donec hendrerit nisl vitae dui laoreet
                semper. In nec venenatis eros. In malesuada et nibh a ullamcorper. Donec ornare
                tincidunt cursus. Vivamus sodales felis risus, vehicula feugiat sapien accumsan at.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Sed sed imperdiet tortor. Curabitur blandit urna id imperdiet molestie.
                Quisque pharetra, dui sed rhoncus feugiat, sem mauris faucibus libero, a congue
                justo ante elementum mauris. Nulla bibendum elementum luctus.
              </p>
            </div>
            <form onSubmit={submit} className=" flex justify-between gap-2">
              <input
                placeholder="Enter your email..."
                className="border-2 rounded-md text-xl w-3/4 py-3 px-4"
                {...signUpForm.register('email')}
              />
              <button
                type="submit"
                className="bg-primary-black text-white rounded font-header w-1/4 py-4"
              >
                Sign Up
              </button>
            </form>
            <CustomErrorMessage errors={signUpForm.formState.errors} name="email" />
          </div>
        </section>
        <section className="h-7/8  xl:w-1/2 flex flex-col justify-center bg-primary-blue">
          <div className="flex justify-center items-center px-6 py-10 xl:px-0 xl:py-0">
            <img src="./Minerva_Graphic.png" alt="Device preview image of Minerva's products" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default View;
