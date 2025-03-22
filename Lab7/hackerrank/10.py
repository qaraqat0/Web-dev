
students = []
N = int(input())

for _ in range(N):
    name = input()
    score = float(input())
    students.append([name, score])
grades = sorted(set([score for name, score in students]))
    
second_lowest_grade = grades[1]
    
second_lowest_students = sorted([name for name, score in students if score == second_lowest_grade])
    
for student in second_lowest_students:
    print(student)