import math

def pythagorean_theorem(a, b):
    c = math.sqrt(a**2 + b**2)
    return c

# Example usage
side_a = float(input("Enter the length of side a: "))
side_b = float(input("Enter the length of side b: "))
hypotenuse = pythagorean_theorem(side_a, side_b)

print(f"The length of the hypotenuse is: {hypotenuse}")
