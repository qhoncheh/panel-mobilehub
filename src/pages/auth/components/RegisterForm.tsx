import Input from "../../../components/inputs/input-login";
import { useState } from "react";
import { CiLock, CiMail, CiUser } from "react-icons/ci";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col text-white items-center gap-4 p-6 text-right rounded-lg shadow-md w-full max-w-md">
        <Input
          label=" نام و نام خانوادگی"
          type="text"
          placeholder="نام و نام خانوادگی خود را وارد کنید"
          required
          leftIcon={<CiUser className="text-white z-50" />}
          className="bg-[#0F1021] backdrop-blur-md text-gray border border-white/20 "
        />
        <Input
          label="ایمیل"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          required
          leftIcon={<CiMail className="text-white z-50" />}
          className="bg-[#0F1021] backdrop-blur-md text-gray border border-white/20 "
        />
        <Input
          label="رمز عبور"
          type={showPassword ? "text" : "password"}
          placeholder="رمز عبور خود را وارد کنید"
          required
          leftIcon={<CiLock className="text-white z-50" />}
          className="bg-[#0F1021] backdrop-blur-md text-white placeholder-gray-300 border border-white/20"
        />

        <button
          type="submit"
          className="w-full bg-[#BFF474] text-gray-900 p-2 mt-4 font-bold rounded-3xl hover:bg-[#8AB054] transition"
        >
          ثبت نام
        </button>
      </form> 
    </div>
  );
};

export default RegisterForm;
