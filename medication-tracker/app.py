def add_medication():
    name = input("Enter medication name: ").strip()
    dosage = input("Enter dosage: ").strip()

    if name == "" or dosage == "":
        print("Medication name and dosage cannot be empty.")
        return

    with open("medications.txt", "a") as file:
        file.write(f"{name} - {dosage}\n")

    print("Medication saved.")


def list_medications():
    try:
        with open("medications.txt", "r") as file:
            print("\nYour medications:")
            print(file.read())
    except FileNotFoundError:
        print("No medications found yet.")


def main():
    while True:
        print("\nMedication Tracker")
        print("1. Add medication")
        print("2. List medications")
        print("3. Quit")

        choice = input("Choose an option (1, 2, or 3): ")

        if choice == "1":
            add_medication()
        elif choice == "2":
            list_medications()
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice")


main()

