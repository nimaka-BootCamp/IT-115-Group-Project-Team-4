import os
import glob

# Path to the Desktop - adjust the username as needed
desktop_path = os.path.join(os.path.expanduser('~'), 'Desktop')

# Pattern to match all .txt files
file_pattern = os.path.join(desktop_path, '*.txt')

# Find and delete .txt files
for file in glob.glob(file_pattern):
    try:
        os.remove(file)
        print(f"Deleted: {file}")
    except Exception as e:
        print(f"Error deleting {file}: {e}")

print("Deletion complete.")
