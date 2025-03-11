namespace StudentsScores

module Float =
    let tryFromString (s: string) =
        if s = "N/A" then None
        else Some (float s)
        
    let fromStringOr value s  =
        s
        |> tryFromString
        |> Option.defaultValue value