open System
let greeting person =
    printfn $"Hello {person}!!!"
    
let isValidName person =
    String.IsNullOrWhiteSpace person
    |> not
    
let filterInvalidNames names =
    names
    |> Array.filter isValidName
    
let capitalizeNames names =
    names
    |> Array.map Globalization.CultureInfo.InvariantCulture.TextInfo.ToTitleCase

[<EntryPoint>]
let main argv =
    argv
    |> filterInvalidNames
    |> capitalizeNames
    |> Array.iter greeting
    
    if argv.Length > 1 then
        printfn "Nice to meet you all!!"
    else
        printfn "Nice to meet you!!"
    0