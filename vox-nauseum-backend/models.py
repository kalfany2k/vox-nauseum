from database import Base
from sqlalchemy import Column, Integer, String, Boolean, Float, Date, JSON, ForeignKey

class Pieces(Base):
    __tablename__ = 'pieces'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    author_name = Column(String)
    collaborators = Column(JSON)
    description = Column(String)
    file_url = Column(String)
    date_posted = Column(String)

class Pictures(Base):
    __tablename__ = 'picutes'
    id = Column(Integer, ForeignKey("pieces.id"))
    rank = Column(Integer)
    url = Column(String)