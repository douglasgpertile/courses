open System.IO
open Microsoft.FSharp.Core

open Student

[<EntryPoint>]
let main argv =
    let fileName = "./Samples/StudentScores.txt"
    
    let fileWithMissingData = "./Samples/StudentScoresNA.txt"
    fileWithMissingData
    |> File.ReadAllLines
    |> Array.skip 1
    |> Array.map Student.fromString
    |> Student.printNumberOfStudents
    |> Array.sortBy (fun s -> s.Name) 
    |> Array.iter Student.printSummary
    0    