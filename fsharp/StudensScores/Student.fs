namespace Student

open StudentsScores

type Student =
    {
        Name : string
        Id : string
        MeanScore : float
        MaxScore : float
        MinScore : float
    }
    
module Student =
    let noDataAvailable = "N/A"
    
    let fromString (s : string)  =
        let values = s.Split('\t')
        let scores =
            values
            |> Array.skip 2
            |> Array.choose Float.tryFromString
        
        let mean = Array.average scores
        let min = Array.min scores
        let max = Array.max scores
        {
            Name = values.[0]
            Id = values.[1]
            MinScore = min
            MaxScore = max
            MeanScore = mean 
        }
        
    let printNumberOfStudents (students: Student[]) =
        printfn $"Student count: {students.Length}"
        students
        
    let printSummary (student: Student) =
        printfn $"{student.Name}\t{student.Id}\t%.2f{student.MeanScore}\t%.2f{student.MinScore}\t%.2f{student.MaxScore}"
