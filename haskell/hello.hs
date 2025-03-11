sayHello :: String -> IO ()

data Mood  = Blah | Woot deriving Show

changeMood :: Mood -> Mood

isPalindrome :: (Eq a) => [a] -> Bool

myAbs :: Integer -> Integer

f :: (a, b) -> (c, d) -> ((b, d), (a, c))

sayHello x =
  putStrLn ("Hello, " ++ x ++ "!")


changeMood Blah = Woot
changeMood Woot = Blah

isPalindrome x = x == reverse x

myAbs value = 
  if value < 0 
    then value * (-1) 
  else 
    if value > 0 
      then value 
    else 0

f a b = ((snd a, snd b), (fst a, fst b))


x = (+)

seilah xs = x w 1
          where w = length xs