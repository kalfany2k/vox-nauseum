from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, Date

class Pieces(Base):
    __tablename__ = 'pieces'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    date_posted = Column(String)

