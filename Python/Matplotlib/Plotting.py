import matplotlib.pyplot as plt
import numpy as np

#(0,0) and (6,250) straight line
x1 = np.array([0, 6])
y1 = np.array([0, 250])

plt.plot(x1, y1)
plt.show()

#(1,3) and (8,10) dot using `o`
x2 = np.array([1,8])
y2 = np.array([3,10])

plt.plot(x2,y2,'o')
plt.show()

#multiple points
x3 = np.array([1,3,5,7,8])
y3 = np.array([2,3,5,4,6])

plt.plot(x3,y3)
plt.show()


