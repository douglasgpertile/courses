module Maths where

-- calculates the nth term of a fib series
fib :: Integer -> Integer

fib 0 = 0
fib 1 = 1
fib x = fib (x - 1) + fib (x - 2)


-- list the nth terms of the fib series
fib_seq :: Integer -> [Integer]

fib_seq 0 = []
fib_seq x = fib_seq (x - 1) ++ [fib (x - 1)]


-- factorial
fact :: Integer -> Integer

fact 0 = 1
fact x = x * fact (x - 1)


fact_expand :: Integer -> String

fact_expand 1 = "1"
fact_expand x = show x ++ "*" ++ fact_expand (x - 1)


print_fact :: Integer -> String

print_fact x = fact_expand x ++ " = " ++ show (fact x)


   