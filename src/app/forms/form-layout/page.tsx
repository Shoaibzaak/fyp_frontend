"use client";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import SelectGroupThree from "@/components/SelectGroup/SelectGroupThree";
import SelectGroupFour from "@/components/SelectGroup/SelectGroupFour";
import SelectedFive from "@/components/SelectGroup/SeletedFive";
import AuthGaurd from "../../../components/AuthGaurd";
import { BaseUrl } from "../../../components/Constants";
// export const metadata = {
//   title: "job portal",
//   description: "job portal",
// };

const FormLayout = () => {
  const [selectedOptionOne, setSelectedOptionOne] = useState<string>("");
  const [selectedOptionThree, setSelectedOptionThree] = useState<string>("");
  const [selectedOptionFour, setSelectedOptionFour] = useState<string>("");
  const [selectedfive, setSelectedfive] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    job_Type: "",
    education: "",
    industry: "",
    experience: "",
    company:"",
  });
  // console.log(formData,"formdatta")
  console.log(selectedfive, "selectedfive");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      job_Type: selectedOptionThree,
      education: selectedOptionOne,
      industry: selectedOptionFour,
      company: selectedfive,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BaseUrl}/api/jobs`, {
        data: formData,
      });
      if (response?.status == 200) {
        toast.success("Job created successfully!", {
          position: "top-right",
        });
        // Optionally, clear the form after submission
        setSelectedOptionOne("");
        setSelectedOptionThree("");
        setSelectedOptionFour("");
        setFormData({
          title: "",
          salary: "",
          experience: "",
          job_Type: selectedOptionThree,
          education: selectedOptionOne,
          industry: selectedOptionFour,
          company:selectedfive
        });
      }
    } catch (error) {
      toast.error("Failed to create job. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <AuthGaurd>
      <DefaultLayout>
        <Breadcrumb pageName="ApplyJob" />

        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
          <div className="w-full max-w-3xl p-4">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Apply Job
                </h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Enter job title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Experience
                    </label>
                    <input
                      type="number"
                      name="title"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="Enter experience"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <SelectGroupFour
                    selectedOptionFour={selectedOptionFour}
                    setSelectedOptionFour={setSelectedOptionFour}
                  />

                  <SelectedFive
                    selectedfive={selectedfive}
                    setSelectedfive={setSelectedfive}
                  />
                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Salary
                    </label>
                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleInputChange}
                      placeholder="Enter salary"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <SelectGroupOne
                    selectedOptionOne={selectedOptionOne}
                    setSelectedOptionOne={setSelectedOptionOne}
                  />
                  <SelectGroupThree
                    selectedOptionThree={selectedOptionThree}
                    setSelectedOptionThree={setSelectedOptionThree}
                  />
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </DefaultLayout>
    </AuthGaurd>
  );
};

export default FormLayout;
