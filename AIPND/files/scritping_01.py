names = [input() for i in range(3)]
assignments = [int(input()) for i in range(3)]
grades = [float(input()) for i in range(3)]

# message string to be used for each student
# HINT: use .format() with this string in your for loop
message = "Hi {},\n\nThis is a reminder that you have {} assignments left to \
submit before you can graduate. You're current grade is {} and can increase \
to {} if you submit all assignments before the due date.\n\n"

# write a for loop that iterates through each set of names, assignments, and grades to print each student's message
#for n, a, g in zip(names, assignments, grades):
	#  print(message.format(n, a, g, ((2 * a) + g)))


### Errors and Exceptions

while True:
	try:
		number = int(input("Please Input a number: "))
		break
	except ValueError as e:
		print("Please Input a real number!")
		print("Error Message: {}".format(e))
	finally:
		print("\nAttempted Input\n")
