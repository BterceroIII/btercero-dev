import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

interface AuthForm {
  name: string
  phone: string
  email: string
  password: string
}

export function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [form, setForm] = useState<AuthForm>({
    name: "",
    phone: "",
    email: "",
    password: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  function updateField(field: keyof AuthForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Simple validation
    if (!form.email || !form.password) {
      setError("Por favor, completa todos los campos.")
      return
    }

    setIsLoading(true)
    setError(null)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    if (mode === "login") {
      console.log("Login:", { email: form.email, password: form.password })
    } else {
      console.log("Signup:", form)
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/50 p-4">
      <Card size="sm" className="w-full max-w-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </CardTitle>
              <CardDescription>
                {mode === "login"
                  ? "Ingresa tus credenciales para acceder"
                  : "Completa tus datos para registrarte"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              {mode === "signup" && (
                <>
                  <Field>
                    <FieldLabel htmlFor="name">Nombre</FieldLabel>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Teléfono</FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+52 555 123 4567"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </Field>
                </>
              )}

              <Field>
                <FieldLabel htmlFor="email">Correo electrónico</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="usuario@ejemplo.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => updateField("password", e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-xs"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </Button>
                </div>
              </Field>
            </FieldGroup>

            {error && (
              <p className="text-sm text-destructive mt-2">{error}</p>
            )}

            <Button type="submit" className="mt-5 w-full" disabled={isLoading}>
              {isLoading ? "Cargando..." : (mode === "login" ? "Iniciar sesión" : "Crear cuenta")}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex justify-center gap-1 border-t text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              <span>¿No tienes cuenta?</span>
              <Button
                type="button"
                variant="link"
                className="h-auto p-0 font-medium"
                onClick={() => setMode("signup")}
              >
                Regístrate
              </Button>
            </>
          ) : (
            <>
              <span>¿Ya tienes cuenta?</span>
              <Button
                type="button"
                variant="link"
                className="h-auto p-0 font-medium"
                onClick={() => setMode("login")}
              >
                Inicia sesión
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
