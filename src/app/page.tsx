"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function Home() {
const [loading, setLoading] = useState(false)
const router = useRouter()

const handleClick = () => {
  setLoading(true)
  router.push("/dashboard")
}

  return (
    <div className="max-padd-container">  
        <Button  variant="default" onClick={handleClick} disabled={loading}>
            {loading ? "cargando.." : "Ir a Dashboard" } 
        </Button>
    </div>
  );
}
