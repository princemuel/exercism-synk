defmodule Secrets do
  @spec secret_add(number()) :: (number() -> number())
  def secret_add(secret) do
    fn value -> value + secret end
  end

  @spec secret_subtract(number()) :: (number() -> number())
  def secret_subtract(secret) do
    fn value -> value - secret end
  end

  @spec secret_multiply(number()) :: (number() -> number())
  def secret_multiply(secret) do
    fn value -> value * secret end
  end

  @spec secret_divide(number()) :: (number() -> number())
  def secret_divide(secret) do
    fn value -> div(value, secret) end
  end

  @spec secret_and(number()) :: (number() -> number())
  def secret_and(secret) do
    fn value -> Bitwise.band(value, secret) end
  end

  @spec secret_xor(number()) :: (number() -> number())
  def secret_xor(secret) do
    fn value -> Bitwise.bxor(value, secret) end
  end

  @spec secret_combine((a -> b), (b -> c)) :: (a -> c) when a: any(), b: any(), c: any()
  def secret_combine(secret_function1, secret_function2) do
    fn value -> secret_function2.(secret_function1.(value)) end
  end
end
