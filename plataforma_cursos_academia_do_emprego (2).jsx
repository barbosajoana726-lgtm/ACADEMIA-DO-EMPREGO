import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Projeto pronto para publicação na Vercel
// Plataforma completa Academia do Emprego

export default function PlataformaCursos() {
  const [pagina, setPagina] = useState("home");

  const cursos = [
    {
      titulo: "Emprego Administrativo do Zero",
      descricao: "Aprenda tudo para conquistar seu primeiro emprego administrativo mesmo sem experiência.",
      preco: "R$ 97,00"
    },
    {
      titulo: "Contabilidade na Prática",
      descricao: "Aprenda contabilidade do zero de forma simples, prática e direta para o mercado de trabalho.",
      preco: "R$ 97,00"
    },
    {
      titulo: "Pacote Emprego Garantido",
      descricao: "Combo completo com Administração + Contabilidade + 2 certificados inclusos.",
      preco: "R$ 147,00"
    }
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600">Academia do Emprego</h1>
        <p className="text-lg mt-2 text-gray-700">
          Cursos profissionais para conquistar seu espaço no mercado de trabalho
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cursos.map((curso, index) => (
          <Card key={index} className="rounded-2xl shadow-lg border-none">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-pink-700 mb-3">{curso.titulo}</h2>
              <p className="text-gray-600 mb-4">{curso.descricao}</p>
              <p className="text-2xl font-bold text-gray-800 mb-4">{curso.preco}</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 rounded-xl">
                Comprar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Certificados Inclusos</h2>
        <p className="text-gray-700 text-lg">
          Todos os cursos oferecem certificado profissional para valorizar seu currículo e aumentar suas chances no mercado.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-16 text-center bg-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Acesso Imediato</h2>
        <p className="text-gray-700 mb-6">
          Após o pagamento pela Kiwify, seu acesso é liberado automaticamente.
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600 rounded-xl px-8 py-6 text-lg">
          Começar Hoje
        </Button>
      </section>
    </div>
  );
}
