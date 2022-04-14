import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Collection, CollectionDocument } from 'src/schemas/collection.schema';
import { CreateTrackerDto } from './dto/create-tracker.dto';
import { UpdateTrackerDto } from './dto/update-tracker.dto';

@Injectable()
export class TrackerService {
  constructor(
    @InjectModel(Collection.name)
    private collectionModel: Model<CollectionDocument>,
  ) {}

  async create(
    createTrackerDto: CreateTrackerDto,
  ): Promise<CollectionDocument> {
    const createdCollection = new this.collectionModel(createTrackerDto);
    return createdCollection.save();
  }

  async findAll(): Promise<CollectionDocument[]> {
    return this.collectionModel.find();
  }

  async findById(_id: string): Promise<CollectionDocument> {
    return this.collectionModel.findById(_id);
  }

  async update(_id: string, updateTrackerDto: UpdateTrackerDto) {
    return this.collectionModel.updateOne(
      { _id },
      { $set: { ...updateTrackerDto } },
    );
  }

  async remove(_id: string) {
    return this.collectionModel.deleteOne({ _id });
  }
  
}
