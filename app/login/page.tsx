import { Button } from "@/components/ui/button";
import LoginImage from "../../public/login.png";
import LogoImage from "../../public/logo.png";

import Image from "next/image";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      {/* Esquerda */}
      <div className="w-full text-center px-4 md:text-left flex flex-col justify-center max-w-[500px] mx-auto">
        <div className="flex items-center gap-1 flex-col md:flex-row">
          <Image src={LogoImage} alt="Logo" width={60} height={60} />
          <span className="font-bold text-xl md:text-2xl">SmartFin.ai</span>
        </div>

        <h1 className="font-bold text-3xl md:text-5xl mt-8 mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground">
          A SmartFin AI é uma plataforma de gestão financeira que utiliza IA
          para monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>

        <Button className="mt-8" variant="outline">
          <LogInIcon className="mr-1"/>
          Entrar com Google
        </Button>
      </div>

      {/* Direita */}
      <div className="relative w-full min-h-screen ">
        <Image
          src={LoginImage}
          alt="Imagem do Dashboard"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
