f = open('some_file.txt', 'r')

file_data = f.read()
f.close()

print(file_data)

f = open('some_file.txt', 'a')
f.write("Hello, World!")

some_data = None

with open('some_file.txt', 'r') as f:  # No need to close the file
	some_data = f.read()

print(some_data)


# Example
def create_cast_list(filename):
    cast_list = []
    #use with to open the file filename
    #use the for loop syntax to process each line
    #and add the actor name to cast_list
    with open(filename, 'r') as f:
        for lines in f:
            cut = lines.find(',')
            cast_list.append(lines[:cut])
    return cast_list

cast_list = create_cast_list('flying_circus_cast.txt')
for actor in cast_list:
    print(actor)